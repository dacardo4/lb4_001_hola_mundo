import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbMongo',
  connector: 'mongodb',
  url: 'mongodb://user_lares:user_lares11@ds363058.mlab.com:63058/lares',
  host: 'ds363058.mlab.com:63058/lares',
  port: 63058,
  user: 'user_lares',
  password: 'user_lares1',
  database: 'lares',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbMongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbMongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbMongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
