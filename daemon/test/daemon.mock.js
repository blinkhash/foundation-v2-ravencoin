// Mock Daemon GetBlockTemplate Data
exports.getBlockTemplate = function() {
  return {
    'capabilities': [
      'proposal'
    ],
    'version': 536870912,
    'rules': [],
    'vbavailable': {},
    'vbrequired': 0,
    'previousblockhash': 'ac78aa6bdfbebf5cda80ae673eaa6c01177586f720dc0d75a7d326631d9d8614',
    'transactions': [],
    'coinbaseaux': {
      'flags': ''
    },
    'coinbasevalue': 156250000,
    'longpollid': 'ac78aa6bdfbebf5cda80ae673eaa6c01177586f720dc0d75a7d326631d9d861496683',
    'target': '00df3b0000000000000000000000000000000000000000000000000000000000',
    'mintime': 1655317378,
    'mutable': [
      'time',
      'transactions',
      'prevblock'
    ],
    'noncerange': '00000000ffffffff',
    'sigoplimit': 400000,
    'sizelimit': 2000000,
    'weightlimit': 2000000,
    'curtime': 1655318189,
    'bits': '2000df3b',
    'height': 1,
    'default_witness_commitment': '6a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf9'
  };
};

// Mock Daemon GetAuxBlock Data
exports.getAuxBlock = function() {
  return {
    'chainid': 1,
    'height': 1,
    'hash': '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2',
    'target': Buffer.from('00000ffff0000000000000000000000000000000000000000000000000000000', 'hex'),
  };
};

// Mock Daemon GetBlockchainInfo Data
exports.getBlockchainInfo = function() {
  return {
    'chain': 'main',
    'blocks': 1,
    'headers': 1,
    'bestblockhash': '1d5af7e2ad9aeccb110401761938c07a5895d85711c9c5646661a10407c82769',
    'difficulty': 0.000244140625,
    'mediantime': 1614202191,
    'verificationprogress': 3.580678270509504e-08,
    'initialblockdownload': false,
    'chainwork': '0000000000000000000000000000000000000000000000000000000000200020',
    'size_on_disk': 472,
    'pruned': false,
    'softforks': [
      {
        'id': 'bip34',
        'version': 2,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip66',
        'version': 3,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip65',
        'version': 4,
        'reject': {
          'status': false
        }
      }
    ],
    'bip9_softforks': {
      'csv': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      },
      'segwit': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      }
    },
    'warnings': ''
  };
};

// Mock Daemon GetInfo Data
exports.getInfo = function() {
  return {
    'version' : 89900,
    'protocolversion' : 70002,
    'walletversion' : 60000,
    'balance' : 0.00000000,
    'blocks' : 1,
    'timeoffset' : -2,
    'connections' : 8,
    'proxy' : '',
    'difficulty' : 510929738.01615179,
    'testnet' : false,
    'keypoololdest' : 1386220819,
    'keypoolsize' : 101,
    'paytxfee' : 0.00000000,
    'errors' : 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications'
  };
};

// Mock Daemon GetPeerInfo Data
exports.getPeerInfo = function() {
  return {
    'id': 20,
    'addr': '18.213.13.51:9333',
    'addrlocal': '173.73.155.96:61108',
    'addrbind': '192.168.1.155:61108',
    'services': '000000000000040d',
    'relaytxes': true,
    'lastsend': 1615676709,
    'lastrecv': 1615676709,
    'bytessent': 1793,
    'bytesrecv': 1782,
    'conntime': 1615674308,
    'timeoffset': 0,
    'pingtime': 0.007751,
    'minping': 0.00522,
    'version': 70015,
    'subver': '/LitecoinCore:0.18.1/',
    'inbound': false,
    'addnode': false,
    'startingheight': 1,
    'banscore': 0,
    'synced_headers': 1,
    'synced_blocks': 1,
    'inflight': [],
    'whitelisted': false,
    'minfeefilter': 0.00001000,
    'bytessent_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'getaddr': 24,
      'getheaders': 93,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    },
    'bytesrecv_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'headers': 106,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    }
  };
};
