import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';

export const tblPublishersFindUniqueSchema: z.ZodType<Prisma.tblPublishersFindUniqueArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPublishersFindUniqueArgs>;

export const tblPublishersFindUniqueZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema }).strict();