import { Injectable } from "@angular/core";

import { EventEmitter } from "events";

@Injectable()
export class SharedService {
  onLoginEvent: EventEmitter = new EventEmitter();
}