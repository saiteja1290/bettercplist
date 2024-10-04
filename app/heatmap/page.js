'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { subDays, format } from 'date-fns'

const generateDummyData = () => {
    const data = {}
    const today = new Date()
    for (let i = 0; i < 365; i++) {
        const date = format(subDays(today, i), 'yyyy-MM-dd')
        data[date] = Math.floor(Math.random() * 5)
    }
    return data
}

export default function HeatmapPage() {
    const [heatmapData, setHeatmapData] = useState({})

    useEffect(() => {
        // In a real application, you would fetch this data from your Supabase database
        setHeatmapData(generateDummyData())
    }, [])

    const getColor = (count) => {
        if (count === 0) return 'bg-gray-800'
        if (count < 2) return 'bg-green-900'
        if (count < 4) return 'bg-green-700'
        return 'bg-green-500'
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Problem Solving Heatmap</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-53 gap-1">
                        {Object.entries(heatmapData).map(([date, count]) => (
                            <div
                                key={date}
                                className={`w-3 h-3 ${getColor(count)}`}
                                title={`${date}: ${count} problems solved`}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}