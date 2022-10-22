import colours from '../../assets/colours';

const Node = () => {
  return (
    <div
      className='input'
      style={{
        borderRadius: 100,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: colours.p2,
        width: '10%',
        padding: 10,
        aspectRatio: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Node content</h2>
    </div>
  );
};
export default Node;
