/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class WinterIsComing {
      static [id: string]: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static AddPlayer: (playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static EveryHours: () => any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static OnInitSeasons: (_season: any) => any;

      /** @noSelf */
      static OnInitWorld: () => any;

      /** @noSelf */
      static RemovePlayer: (p: any) => any;

      /** @noSelf */
      static Render: () => any;
    }
  }
  export namespace lua.client.LastStand.WinterIsComing {}
}
