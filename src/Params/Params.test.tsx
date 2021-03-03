import React from "react";
import pretty from "pretty";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Params from "./Params";

test("renders params", () => {
  const { container } = render(<Params />);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"params\\">
      <div class=\\"MuiDrawer-root MuiDrawer-docked makeStyles-drawer-1\\">
        <div class=\\"MuiPaper-root MuiDrawer-paper makeStyles-drawerPaper-2 MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft MuiPaper-elevation0\\">
          <div class=\\"MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters\\"></div>
          <div class=\\"makeStyles-drawerContainer-3\\">
            <nav class=\\"MuiList-root MuiList-padding MuiList-subheader\\" aria-labelledby=\\"nested-list-subheader\\">
              <div class=\\"MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters\\" id=\\"nested-list-subheader\\">Workers</div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">PS</div>
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Patryk Sierżengowsky</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">AG</div>
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Adriano Gaikovsky</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">PC</div>
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Patrycyja Cierlikova</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">KB</div>
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Kacperos Borkowsky</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
            </nav>
            <hr class=\\"MuiDivider-root\\">
            <nav class=\\"MuiList-root MuiList-padding MuiList-subheader\\" aria-labelledby=\\"nested-list-subheader\\">
              <div class=\\"MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters\\" id=\\"nested-list-subheader\\">Parameters</div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Hours per day</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Kamehameha</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
              <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Universe is on fire!!!</span></div><span class=\\"MuiTouchRipple-root\\"></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>"
  `);
});
