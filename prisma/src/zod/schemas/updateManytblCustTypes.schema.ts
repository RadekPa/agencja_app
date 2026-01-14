import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesUpdateManyMutationInputObjectSchema as tblCustTypesUpdateManyMutationInputObjectSchema } from './objects/tblCustTypesUpdateManyMutationInput.schema';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './objects/tblCustTypesWhereInput.schema';

export const tblCustTypesUpdateManySchema: z.ZodType<Prisma.tblCustTypesUpdateManyArgs> = z.object({ data: tblCustTypesUpdateManyMutationInputObjectSchema, where: tblCustTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustTypesUpdateManyArgs>;

export const tblCustTypesUpdateManyZodSchema = z.object({ data: tblCustTypesUpdateManyMutationInputObjectSchema, where: tblCustTypesWhereInputObjectSchema.optional() }).strict();