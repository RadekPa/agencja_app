import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersUpdateManyMutationInputObjectSchema as tblCustomersUpdateManyMutationInputObjectSchema } from './objects/tblCustomersUpdateManyMutationInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './objects/tblCustomersWhereInput.schema';

export const tblCustomersUpdateManySchema: z.ZodType<Prisma.tblCustomersUpdateManyArgs> = z.object({ data: tblCustomersUpdateManyMutationInputObjectSchema, where: tblCustomersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustomersUpdateManyArgs>;

export const tblCustomersUpdateManyZodSchema = z.object({ data: tblCustomersUpdateManyMutationInputObjectSchema, where: tblCustomersWhereInputObjectSchema.optional() }).strict();