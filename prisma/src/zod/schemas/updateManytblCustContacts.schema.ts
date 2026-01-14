import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsUpdateManyMutationInputObjectSchema as tblCustContactsUpdateManyMutationInputObjectSchema } from './objects/tblCustContactsUpdateManyMutationInput.schema';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './objects/tblCustContactsWhereInput.schema';

export const tblCustContactsUpdateManySchema: z.ZodType<Prisma.tblCustContactsUpdateManyArgs> = z.object({ data: tblCustContactsUpdateManyMutationInputObjectSchema, where: tblCustContactsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustContactsUpdateManyArgs>;

export const tblCustContactsUpdateManyZodSchema = z.object({ data: tblCustContactsUpdateManyMutationInputObjectSchema, where: tblCustContactsWhereInputObjectSchema.optional() }).strict();