/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class keyBinding {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.keyBinding {}
}
