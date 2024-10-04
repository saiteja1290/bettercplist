'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { a20jProblems, csesProblems } from '@/utils/problemData'

export default function ProblemsPage() {
    const [completedProblems, setCompletedProblems] = useState([])

    const toggleProblemCompletion = (id) => {
        setCompletedProblems(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    const ProblemTable = ({ problems, title }) => (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {problems.map(problem => (
                            <TableRow key={problem.id}>
                                <TableCell>
                                    <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        {problem.title}
                                    </a>
                                </TableCell>
                                <TableCell>{problem.difficulty}</TableCell>
                                <TableCell>
                                    <Checkbox
                                        checked={completedProblems.includes(problem.id)}
                                        onCheckedChange={() => toggleProblemCompletion(problem.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Problem Lists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProblemTable problems={a20jProblems} title="A2OJ Ladder" />
                <ProblemTable problems={csesProblems} title="CSES Problem Set" />
            </div>
        </div>
    )
}