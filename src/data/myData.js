module.exports =
{
  Environment: ['Test', 'Prod', 'Staging'],
  Servers: {
    test: ['1', '2.ext', '3.ext', '4.ext', '5.ext'],
    prod: ['12', '41.ext', '42.ext', '43.ext', '44.ext'],
  },
  Farms: {
    test: ['farm1', 'farm2', 'farm3', 'farm4'],
    prod: ['farm41', 'farm42', 'farm43', 'farm44'],
    staging: ['farm01', 'farm02', 'farm03', 'farm04'],
  }
}
