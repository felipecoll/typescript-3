enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
}

const philipUser: User = {
  username: 'philip',
  role: ROLES.ADMIN,
}
