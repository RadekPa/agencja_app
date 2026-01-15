import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateManyContactInputObjectSchema as tblCustContactsCreateManyContactInputObjectSchema } from './tblCustContactsCreateManyContactInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustContactsCreateManyContactInputObjectSchema), z.lazy(() => tblCustContactsCreateManyContactInputObjectSchema).array()])
}).strict();
export const tblCustContactsCreateManyContactInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustContactsCreateManyContactInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateManyContactInputEnvelope>;
export const tblCustContactsCreateManyContactInputEnvelopeObjectZodSchema = makeSchema();
