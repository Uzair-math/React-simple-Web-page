import RunsListView from '../components/RunsListView';

const runs = [
  { id: 1, timestamp: '2023-11-09 12:00 PM', status: 'Pass' },
];

const Runs = () => {
  return (
    <div>
      <RunsListView runs={runs} />
    </div>
  );
};

export default Runs;
