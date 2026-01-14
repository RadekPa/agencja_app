import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';

export const tblPublishersFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPublishersFindUniqueOrThrowArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPublishersFindUniqueOrThrowArgs>;

export const tblPublishersFindUniqueOrThrowZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict();