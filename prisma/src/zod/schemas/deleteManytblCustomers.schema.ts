import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './objects/tblCustomersWhereInput.schema';

export const tblCustomersDeleteManySchema: z.ZodType<Prisma.tblCustomersDeleteManyArgs> = z.object({ where: tblCustomersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustomersDeleteManyArgs>;

export const tblCustomersDeleteManyZodSchema = z.object({ where: tblCustomersWhereInputObjectSchema.optional() }).strict();