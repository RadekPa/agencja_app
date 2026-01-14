import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewUpdateManyMutationInputObjectSchema as tblFraVAT_NewUpdateManyMutationInputObjectSchema } from './objects/tblFraVAT_NewUpdateManyMutationInput.schema';
import { tblFraVAT_NewWhereInputObjectSchema as tblFraVAT_NewWhereInputObjectSchema } from './objects/tblFraVAT_NewWhereInput.schema';

export const tblFraVAT_NewUpdateManySchema: z.ZodType<Prisma.tblFraVAT_NewUpdateManyArgs> = z.object({ data: tblFraVAT_NewUpdateManyMutationInputObjectSchema, where: tblFraVAT_NewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewUpdateManyArgs>;

export const tblFraVAT_NewUpdateManyZodSchema = z.object({ data: tblFraVAT_NewUpdateManyMutationInputObjectSchema, where: tblFraVAT_NewWhereInputObjectSchema.optional() }).strict();