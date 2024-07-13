const Messages = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 border rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Conversations</h2>
          {/* Conversations list will be added here */}
        </div>
        <div className="md:col-span-2 border rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Chat</h2>
          {/* Chat window will be added here */}
        </div>
      </div>
    </div>
  );
};

export default Messages;