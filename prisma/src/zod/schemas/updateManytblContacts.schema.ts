import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsUpdateManyMutationInputObjectSchema as tblContactsUpdateManyMutationInputObjectSchema } from './objects/tblContactsUpdateManyMutationInput.schema';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './objects/tblContactsWhereInput.schema';

export const tblContactsUpdateManySchema: z.ZodType<Prisma.tblContactsUpdateManyArgs> = z.object({ data: tblContactsUpdateManyMutationInputObjectSchema, where: tblContactsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblContactsUpdateManyArgs>;

export const tblContactsUpdateManyZodSchema = z.object({ data: tblContactsUpdateManyMutationInputObjectSchema, where: tblContactsWhereInputObjectSchema.optional() }).strict();