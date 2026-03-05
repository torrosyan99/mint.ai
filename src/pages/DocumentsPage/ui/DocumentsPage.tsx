import { Documents } from '@/widgets/Documents';
import { Tabs } from '@/widgets/Tabs';

 const DocumentsPage = () => {
    return (
        <>
            <Tabs />
            <Documents documents={[]} />
        </>
    );
};


 export default DocumentsPage;