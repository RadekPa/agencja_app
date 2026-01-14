import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './objects/tblFraVAT_NewSelect.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';

export const tblFraVAT_NewFindUniqueOrThrowSchema: z.ZodType<Prisma.tblFraVAT_NewFindUniqueOrThrowArgs> = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewFindUniqueOrThrowArgs>;

export const tblFraVAT_NewFindUniqueOrThrowZodSchema = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict();