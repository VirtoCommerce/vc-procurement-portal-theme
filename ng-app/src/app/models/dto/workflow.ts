export class Workflow {
  Name: string;
  ImageUrl: string;
  private System?: boolean;
  OrderCreatorRoles: string[];
  States: any[];

  public get IsSystem(): boolean {
    if (this.System != null && this.System) {
      return true;
    }

    return false;
  }

  constructor(systemWorkflow: boolean) {
    this.System = systemWorkflow;
  }
}
