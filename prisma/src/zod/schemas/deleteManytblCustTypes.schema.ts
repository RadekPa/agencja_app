import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './objects/tblCustTypesWhereInput.schema';

export const tblCustTypesDeleteManySchema: z.ZodType<Prisma.tblCustTypesDeleteManyArgs> = z.object({ where: tblCustTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustTypesDeleteManyArgs>;

export const tblCustTypesDeleteManyZodSchema = z.object({ where: tblCustTypesWhereInputObjectSchema.optional() }).strict();