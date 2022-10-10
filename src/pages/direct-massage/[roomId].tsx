import { Head } from 'next/document';
import { useRouter } from 'next/router';

function DirectMessagePage() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div>
      <Head>
        <title>Direct Message</title>
      </Head>
      <div>{roomId}</div>
    </div>
  );
}
export default DirectMessagePage;
