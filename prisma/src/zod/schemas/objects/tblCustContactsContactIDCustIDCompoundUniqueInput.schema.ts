import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.number().int(),
  CustID: z.number().int()
}).strict();
export const tblCustContactsContactIDCustIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblCustContactsContactIDCustIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsContactIDCustIDCompoundUniqueInput>;
export const tblCustContactsContactIDCustIDCompoundUniqueInputObjectZodSchema = makeSchema();
