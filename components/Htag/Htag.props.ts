import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}