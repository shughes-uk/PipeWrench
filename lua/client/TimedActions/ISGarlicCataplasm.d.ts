/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISGarlicCataplasm:new */
    export class ISGarlicCataplasm extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctorLevel: any;

      item: any;

      otherPlayer: any;

      constructor(doctor: any, otherPlayer: any, item: any, bodyPart: any);
    }
  }
  export namespace lua.client.TimedActions.ISGarlicCataplasm {}
}
