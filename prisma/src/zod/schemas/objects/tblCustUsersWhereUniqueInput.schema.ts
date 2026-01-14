import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCustIDLoginCompoundUniqueInputObjectSchema as tblCustUsersCustIDLoginCompoundUniqueInputObjectSchema } from './tblCustUsersCustIDLoginCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  CustID_Login: z.lazy(() => tblCustUsersCustIDLoginCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblCustUsersWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCustUsersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersWhereUniqueInput>;
export const tblCustUsersWhereUniqueInputObjectZodSchema = makeSchema();
