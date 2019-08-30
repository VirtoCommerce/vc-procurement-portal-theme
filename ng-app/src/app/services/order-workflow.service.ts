import { Injectable } from '@angular/core';
import Workflow from 'src/assets/workflow/workflow.json';
import { OrderStateTransitionResult } from '../models/order-state-transition-result';

@Injectable({
  providedIn: 'root'
})
export class OrderWorkflowService {
  private _workflow: any;

  constructor() {
    this._workflow = Object.assign({}, Workflow);
  }

  public getRoleTransitions(currentState: string, currentRole: string): OrderStateTransitionResult {
    let result = null;

    const targetState = this._workflow.States.find(state => state.Name === currentState);
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

  public getStatesByRoles(roles: string[]): string[] {
    const set = new Set<string>();
    roles.forEach(iteratedRole => {
      const statesQuery = this._workflow.States
        .filter(state => state.PermittedTransitions && state.PermittedTransitions
          .some(transition => transition.Roles && transition.Roles
            .some(role => role === iteratedRole)));

      // iterate and add to result set
      statesQuery.forEach(state => set.add(state.Name));
    });
    return Array.from(set);
  }

  public getRoles(): string[] {
    return this.findRolesInStates(this._workflow.States);
  }

  public getRolesByState(currentState: string): string[] {
    const states = this._workflow.States.filter(state => state.Name === currentState);
    return this.findRolesInStates(states);
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
