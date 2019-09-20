import { WorkflowStorageService } from '@services/workflow-storage.service';
import { Injectable } from '@angular/core';
import { OrderStateTransitionResult } from '@models/order-state-transition-result';
import { Workflow } from '@models/dto/workflow';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderWorkflowService {
  public action;

  get workflow(): Workflow {
    return this.workflowStorageService.getActiveWorkflow();
  }

  constructor(private workflowStorageService: WorkflowStorageService) {
    this.action = new Subject<string>();
  }

  public getRoleTransitions(currentState: string, currentRole: string): OrderStateTransitionResult[] {
    let result = null;

    const targetState = this.workflow.States.find(state => state.Name === currentState);
    if (targetState != null && targetState.PermittedTransitions != null) {
      result = targetState.PermittedTransitions.filter(transition =>
        this.isRoleExistsInRoles(currentRole, transition.Roles));
    }

    if (result != null) {
      result = result.map(item => new OrderStateTransitionResult(item.ToState, item.Trigger));
    } else {
      // idle
    }

    return result;
  }

  public isContainsSuccessfulAttribute(currentState: string): boolean {
    if (this.workflow.IsSystem) {
      return true;
    }

    const targetState = this.workflow.States.find(state => state.Name === currentState);

    if (targetState != null) {
      return targetState.IsSuccessful != null && targetState.IsSuccessful;
    }
  }

  public getStatesByRoles(roles: string[]): string[] {
    const set = new Set<string>();
    roles.forEach(iteratedRole => {
      const statesQuery = this.workflow.States
        .filter(state => state.PermittedTransitions && state.PermittedTransitions
          .some(transition => transition.Roles && transition.Roles
            .some(role => role === iteratedRole)));

      // iterate and add to result set
      statesQuery.forEach(state => set.add(state.Name));
    });
    return Array.from(set);
  }

  public getWorkflowRoles(): string[] {
    if (this.workflow.States == null) {
      return [];
    }

    return this.findRolesInStates(this.workflow.States);
  }

  public getAllRoles(): string[] {
    const orderCreatorsRoles = this.workflow.OrderCreatorRoles;
    const rolesInStates = this.findRolesInStates(this.workflow.States);
    return [...orderCreatorsRoles, ...rolesInStates];
  }

  public getOrderCreatorRoles(): string[] {
    return this.workflow.OrderCreatorRoles;
  }

  public getRolesByState(currentState: string): string[] {
    if (this.workflow.States == null) {
      return [];
    }

    const states = this.workflow.States.filter(state => state.Name === currentState);
    return this.findRolesInStates(states);
  }

  public getRolesTextByState(state: string): string {
    const roles = this.getRolesByState(state);
    if (roles && roles.length > 0) {
      const result = new Array(roles).join(', ');
      return result;
    }

    // throw Error(`The predefined roles for \'${state}\' order status aren't been found in the workflow file.`);

    return 'N/A';
  }

  public getAllStates(exceptFinalStatus?: boolean, exceptInitialStatus?: boolean): string[] {
    let query = this.workflow.States;
    if (query == null) {
      return [];
    }

    if (exceptFinalStatus === true) {
      query = query.filter((state: any) => state.IsFinal == null);
    }

    if (exceptInitialStatus === true) {
      query = query.filter((state: any) => state.IsInitial == null);
    }

    return query.map((state: any) => state.Name);
  }

  public getWorkflowImageUrl(): string {
    return this.workflow.ImageUrl;
  }

  public getWorkflowItems() {
    return this.workflowStorageService.getWorkflowItems();
  }

  public changeWorkflow(name: string, by: string, isActive: boolean) {
    this.workflowStorageService.changeWorkflow(name, by, isActive);
    this.action.next('workflow_changed');
  }

  public disableWorkflow(name: string, by: string) {
    this.workflowStorageService.disableWorkflow(name, by);
    this.action.next('workflow_changed');
  }

  private findRolesInStates(states: any): string[] {
    const roles = new Set<string>();
    states.forEach(state => {
      if (state.PermittedTransitions == null) {
        return;
      }

      state.PermittedTransitions.forEach(transition => {
        if (transition.Roles == null) {
          return;
        }

        transition.Roles.forEach(role => {
          roles.add(role);
        });
      });
    });

    return Array.from(roles);
  }

  private isRoleExistsInRoles(role: string, roles: string[]): boolean {
    if (roles == null) {
      return false;
    }
    return roles.some(r => r === role);
  }
}
