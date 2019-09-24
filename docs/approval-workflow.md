# Approval Workflow

## Activate Approval Workflow

In order to activate the Approval Workflow in the system, the admin should first upload a valid JSON file that contains Approval Workflow rules.

The admin should create a valid json file that contains the approval workflow needed.

Approval Workflow JSON Example: 

{

"ImageUrl": "themes/assets/images/workflow2.svg", 

"States": [

{

"Name": "New",

"IsInitial": true,

"PermittedTransitions": [

{

"ToState": "1st approved",

"Trigger": "1st Approve",

"Roles": [ "Owner" ]

},

{

"ToState": "Rejected",

"Trigger": "Reject",

"Roles": [ "Owner", "Admin" ]

}

]

},

{

"Name": "1st approved",

"PermittedTransitions": [

{

"ToState": "Approved", 

"Trigger": "Approve", 

"Roles": [ "Admin" ] 

}, 

{ 

"ToState": "Rejected", 

"Trigger": "Reject", 

"Roles": [ "Owner", "Admin" ] 

} 

] 

}, 

{ 

"Name": "Approved", 

"IsFinal": true 

}, 

{ 

"Name": "Rejected", 

"IsFinal": true 

} 

] 

} 

In order to activate the approval workflow the admin should go through the following steps:

1. Open Company page->Approval workflow;
1. On 'Approval workflow' page the following will be displayed:

    1. A table with the list of approval workflows and possibility to activate and deactivate them;
    1. Diagram of the current approval workflow.
1. The admin selects a workflow from the list and activates it using the switch button.

## Deactivate Approval Workflow

1. The admin selects the current active approval workflow from the list and switches the button to 'off';
1. The system will display a notification and prompt the user to confirm deactivation;
1. The user confirms the deactivation and the approval workflow will be deactivated. In this case no approval workflow will be required after the checkout.

!**Important** The current workflow can be deactivated only if ALL orders in the system are in new, completed or rejected status. In case there is at least one order, which is still 'in progress', the approval workflow can not be deactivated or changed.

![Approval workflow](media/screen-approva-workflow-page.png)
