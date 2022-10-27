import { Head } from 'next/document';
import { useRouter } from 'next/router';

function DirectMessagePage() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div>
      <div>{roomId}</div>
    </div>
  );
}
export default DirectMessagePage;
