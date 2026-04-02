import React from 'react';
import { notFound } from 'next/navigation';
import WebDevelopmentPage from '../../../components/services/web-development/WebDevelopmentPage';
import AIAutomationPage from '../../../components/services/ai-automation/AIAutomationPage';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DynamicServicePage({ params }: PageProps) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    if (slug === 'web-development') {
        return <WebDevelopmentPage />;
    }

    if (slug === 'ai-automation') {
        return <AIAutomationPage />;
    }
    notFound();
}
