import { LinkProps as MuiLinkProps } from "@material-ui/core/Link"
import React, { FC } from "react"
import { Link, LinkProps } from "react-router-dom"

type THeaderLinkProps = MuiLinkProps & LinkProps
export const HeaderLink: FC<THeaderLinkProps> = (props) => {
  return <Link {...props} />
}
