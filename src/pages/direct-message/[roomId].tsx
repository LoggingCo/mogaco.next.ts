import { useRouter } from 'next/router';

function DirectMessage() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div>
      <h1>Direct Message</h1>
      <p>Room ID: {roomId}</p>
    </div>
  );
}
export default DirectMessage;
