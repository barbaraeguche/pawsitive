'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/ui/shadcn/dropdown-menu';

export default function MobileNav({ mainLinks }: {
	mainLinks: { name: string; href: string }[]
}) {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	
	return (
		<DropdownMenu modal={false} open={openMenu} onOpenChange={setOpenMenu}>
			<DropdownMenuTrigger asChild
			                     aria-label={'Open navigation menu'}
			                     className={'hover:cursor-pointer'}
			>
				<Menu/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className={'bg-dough w-56'}>
				<DropdownMenuGroup>
					{mainLinks.map((link) => (
						<DropdownMenuItem key={link.name}
						                  onClick={() => setOpenMenu(false)}
						                  className={'focus:bg-brown/5 transition-colors'}
						>
							<Link href={link.href}
							      className={'px-1.5 py-0.5 rounded-lg w-full'}
							>
								{link.name}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator className={'bg-brown-80'}/>
				<DropdownMenuItem onClick={() => setOpenMenu(false)}
				                  className={'focus:bg-brown/5 transition-colors'}
				>
					<Link href={'/account'}
					      className={'px-1.5 py-0.5 rounded-lg w-full'}
					>
						My Account
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}