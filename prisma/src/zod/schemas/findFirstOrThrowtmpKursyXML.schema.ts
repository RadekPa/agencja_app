import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLOrderByWithRelationInputObjectSchema as tmpKursyXMLOrderByWithRelationInputObjectSchema } from './objects/tmpKursyXMLOrderByWithRelationInput.schema';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';
import { TmpKursyXMLScalarFieldEnumSchema } from './enums/TmpKursyXMLScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tmpKursyXMLFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tmpKursyXMLSelect> = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLSelect>;

export const tmpKursyXMLFindFirstOrThrowSelectZodSchema = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict();

export const tmpKursyXMLFindFirstOrThrowSchema: z.ZodType<Prisma.tmpKursyXMLFindFirstOrThrowArgs> = z.object({ select: tmpKursyXMLFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLFindFirstOrThrowArgs>;

export const tmpKursyXMLFindFirstOrThrowZodSchema = z.object({ select: tmpKursyXMLFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict();