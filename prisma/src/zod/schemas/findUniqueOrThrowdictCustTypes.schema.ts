import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesSelectObjectSchema as dictCustTypesSelectObjectSchema } from './objects/dictCustTypesSelect.schema';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './objects/dictCustTypesInclude.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './objects/dictCustTypesWhereUniqueInput.schema';

export const dictCustTypesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictCustTypesFindUniqueOrThrowArgs> = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), where: dictCustTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCustTypesFindUniqueOrThrowArgs>;

export const dictCustTypesFindUniqueOrThrowZodSchema = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), where: dictCustTypesWhereUniqueInputObjectSchema }).strict();