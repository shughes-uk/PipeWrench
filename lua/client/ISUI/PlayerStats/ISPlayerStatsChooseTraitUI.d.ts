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
/// <reference path="../../../../lua.reference.partial.d.ts" />
/// <reference path="../../../../lua.api.partial.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsChooseTraitUI:new */
    export class ISPlayerStatsChooseTraitUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      badTraits: any;

      cancel: any;

      chr: any;

      combo: any;

      comboList: any;

      goodTrait: any;

      goodTraits: any;

      ok: any;

      onclick: any;

      target: any;

      traitsSelector: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, player: any);

      create: (() => any) | any;

      onChangeList: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      populateComboList: (() => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsChooseTraitUI {}
}
