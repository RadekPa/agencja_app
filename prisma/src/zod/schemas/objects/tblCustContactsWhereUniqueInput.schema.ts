import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsContactIDCustIDCompoundUniqueInputObjectSchema as tblCustContactsContactIDCustIDCompoundUniqueInputObjectSchema } from './tblCustContactsContactIDCustIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  ContactID_CustID: z.lazy(() => tblCustContactsContactIDCustIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblCustContactsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCustContactsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsWhereUniqueInput>;
export const tblCustContactsWhereUniqueInputObjectZodSchema = makeSchema();
