import  TokenSvg from "@icons/buying-token.svg?react"
import TokensSvg  from "@icons/buying-token-2.svg?react"
import  TokensSecondSvg from "@icons/buying-token-3.svg?react"

export const balanceConfig = [
    { tokens: 500, price: 250, icon: <TokenSvg/> },
    { tokens: 1500, price: 700, icon: <TokensSvg/> },
    { tokens: 3000, price: 1290, oldPrice: 1598, icon: <TokensSecondSvg/> },
] as const;
