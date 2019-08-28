export class OrderStateTransitionResult {
  newState: string;
  trigger: string;

  constructor(newState: string, trigger: string) {
    this.newState = newState;
    this.trigger = trigger;
  }
}
