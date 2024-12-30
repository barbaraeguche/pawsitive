'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/ui/shadcn/dropdown-menu';

export default function MobileNavLink({ mainLinks }: {
	mainLinks: { name: string; href: string }[]
}) {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	
	return (
		<DropdownMenu modal={false} open={openMenu} onOpenChange={setOpenMenu}>
			<DropdownMenuTrigger aria-label="Open navigation menu"
			                     className="hover:cursor-pointer"
			                     asChild
			>
				<Menu />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-dough w-56">
				<DropdownMenuGroup>
					{mainLinks.map((link) => (
						<DropdownMenuItem key={link.name}
						                  onClick={() => setOpenMenu(false)}
						>
							<Link href={link.href}
							      className="px-1.5 py-0.5 rounded-lg w-full"
							>
								{link.name}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator className="bg-brown-80"/>
				<DropdownMenuItem onClick={() => setOpenMenu(false)}>
					<Link href="/account"
					      className="px-1.5 py-0.5 rounded-lg w-full"
					>
						My Account
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}