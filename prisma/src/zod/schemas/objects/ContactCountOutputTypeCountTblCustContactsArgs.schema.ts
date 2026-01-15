import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './tblCustContactsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereInputObjectSchema).optional()
}).strict();
export const ContactCountOutputTypeCountTblCustContactsArgsObjectSchema = makeSchema();
export const ContactCountOutputTypeCountTblCustContactsArgsObjectZodSchema = makeSchema();
