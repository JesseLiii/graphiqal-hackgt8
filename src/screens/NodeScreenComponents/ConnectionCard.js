const ConnectionCard = ({ connection }) => {
  const { content, nodeTitle } = connection;

  return (
    <div
      className='card'
      style={{ padding: '5px', display: 'flex', flexDirection: 'column' }}
    >
      <div>{nodeTitle}</div>
      <div>{content}</div>
    </div>
  );
};

export default ConnectionCard;
