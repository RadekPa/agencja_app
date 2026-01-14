import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './objects/tblFraVAT_NewSelect.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';

export const tblFraVAT_NewFindUniqueSchema: z.ZodType<Prisma.tblFraVAT_NewFindUniqueArgs> = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewFindUniqueArgs>;

export const tblFraVAT_NewFindUniqueZodSchema = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict();