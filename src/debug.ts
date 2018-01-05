export default process.env.IS_PROCESS_ACTIVE_DEBUG === '1' ? require('debug')('is-process-active') : () => {}
