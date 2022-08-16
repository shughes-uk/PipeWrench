/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**  @noSelfInFile */
/// <reference path="../../reference.d.ts" />
/// <reference path="../../PipeWrench.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class ISObjectClickHandler {
      static [id: string]: any;

      /** @noSelf */
      static doClick: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static doClickCurtain: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doClickDoor: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doClickLightSwitch: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doClickSpecificObject: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doClickThumpable: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doClickWindow: (object: any, playerNum: any, playerObj: any) => any;

      /** @noSelf */
      static doDoubleClick: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static doRClick: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static doRDoubleClick: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static onObjectLeftMouseButtonDown: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static onObjectLeftMouseButtonUp: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static onObjectRightMouseButtonDown: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static onObjectRightMouseButtonUp: (object: any, x: any, y: any) => any;

      /** @noSelf */
      static onTick: () => any;
    }
  }
  export namespace lua.server.ISObjectClickHandler { }
}
