import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';

export const tblPublishersDeleteOneSchema: z.ZodType<Prisma.tblPublishersDeleteArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPublishersDeleteArgs>;

export const tblPublishersDeleteOneZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict();