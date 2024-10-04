import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-background border-b border-border">
            <Link href="/" className="text-xl font-bold">CP Tracker</Link>
            <div>
                <Button variant="ghost" asChild>
                    <Link href="/problems">Problems</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/heatmap">Heatmap</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/profile">Profile</Link>
                </Button>
            </div>
        </nav>
    )
}