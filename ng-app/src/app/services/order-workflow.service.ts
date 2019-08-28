import { Injectable } from '@angular/core';
import Workflow from 'src/assets/workflow/workflow.json';
import { OrderStateTransitionResult } from '../models/order-state-transition-result';
@Injectable({
  providedIn: 'root'
})
export class OrderWorkflowService {

  constructor() {
  }

  public getRoleTransitions(currentState: string, currentRole: string): OrderStateTransitionResult {
    let result = null;
    const obj = Object.assign({}, Workflow);

    const targetState = obj.States.find(state => state.Name === currentState);
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

  public getRoles(): string[] {
    const obj = Object.assign({}, Workflow);
    return this.findRolesInStates(obj.States);
  }

  public getRolesByState(currentState: string): string[] {
    const obj = Object.assign({}, Workflow);
    const states = obj.States.filter(state => state.Name === currentState);
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
